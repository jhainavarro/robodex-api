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

@Controller('robots')
export class RobotsController {
  constructor(private readonly robotsService: RobotsService) {}

  @Post()
  create(@Body() createRobotDto: CreateRobotDto) {
    return this.robotsService.create(createRobotDto);
  }

  @Get()
  findAll() {
    return this.robotsService.findAll();
  }

  @Get(':guid')
  findOne(@Param('guid') guid: string) {
    return this.robotsService.findOne(guid);
  }

  @Patch(':guid')
  update(@Body() updateRobotDto: UpdateRobotDto) {
    return this.robotsService.update(updateRobotDto);
  }

  @Delete(':guid')
  remove(@Param('guid') guid: string) {
    return this.robotsService.remove(guid);
  }
}
