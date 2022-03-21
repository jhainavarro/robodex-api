import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Robot } from './robots/entities/robot.entity';
import { RobotsModule } from './robots/robots.module';

@Module({
  imports: [
    // FIXME: Get from a separate config file
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'jhai',
      password: '123qweasd',
      database: 'robodex',
      entities: [Robot], // TODO: Target entities folder instead of enumerating all models
      synchronize: true, // TODO: Should only be for local dev
      autoLoadEntities: true,
    }),
    RobotsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
