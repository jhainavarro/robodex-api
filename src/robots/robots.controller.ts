import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RobotsService } from './robots.service';
import { CreateRobotDto } from './dto/create-robot.dto';
import { UpdateRobotDto } from './dto/update-robot.dto';
import { RobotDto } from './dto/robot.dto';

@Controller('robots')
export class RobotsController {
  constructor(private readonly robotsService: RobotsService) {}

  @Post()
  async create(@Body() createRobotDto: CreateRobotDto): Promise<RobotDto> {
    return this.robotsService.toDto(
      await this.robotsService.create(createRobotDto),
    );
  }

  @Get()
  async findAll(): Promise<RobotDto[]> {
    return this.robotsService.toDtos(await this.robotsService.findAll());
  }

  @Get(':guid')
  async findOne(@Param('guid') guid: string): Promise<RobotDto | undefined> {
    return this.robotsService.toDto(await this.robotsService.findOne(guid));
  }

  @Patch(':guid')
  async update(@Body() updateRobotDto: UpdateRobotDto): Promise<RobotDto> {
    return this.robotsService.toDto(
      await this.robotsService.update(updateRobotDto),
    );
  }

  @Delete(':guid')
  remove(@Param('guid') guid: string) {
    return this.robotsService.remove(guid);
  }
}
