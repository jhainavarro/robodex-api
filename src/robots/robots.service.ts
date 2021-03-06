import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRobotDto } from './dto/create-robot.dto';
import { RobotDto } from './dto/robot.dto';
import { UpdateRobotDto } from './dto/update-robot.dto';
import { Robot } from './entities/robot.entity';

// TODO: Error handling + proper error codes

@Injectable()
export class RobotsService {
  constructor(
    @InjectRepository(Robot)
    private robotsRepo: Repository<Robot>,
  ) {}

  async create(robot: CreateRobotDto): Promise<Robot> {
    const newRobot = this.robotsRepo.create(robot);

    newRobot.guid = `${Date.now()}`; // TODO: Generate uuid
    await this.robotsRepo.save(newRobot);

    return newRobot;
  }

  findAll(): Promise<Robot[]> {
    return this.robotsRepo.find();
  }

  findOne(guid: string): Promise<Robot | undefined> {
    return this.robotsRepo.findOne({
      where: [{ guid }],
    });
  }

  async update(robot: UpdateRobotDto): Promise<Robot> {
    const dbRobot = await this.findOne(robot.guid);
    const updatedRobot = await this.robotsRepo.save({
      ...robot,
      id: dbRobot.id,
    });

    return updatedRobot;
  }

  async remove(guid: string): Promise<void> {
    const robot = await this.findOne(guid);

    this.robotsRepo.remove(robot);
  }

  toDto(robot?: Robot): RobotDto {
    delete robot.id;
    return robot;
  }

  toDtos(list: Robot[] = []): RobotDto[] {
    return list.map((robot) => this.toDto(robot));
  }
}
