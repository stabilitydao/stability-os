import { Module } from '@nestjs/common';
import { GithubModule } from './github/github.module';
import { ConfigModule } from '@nestjs/config';
import { CommandModule } from 'nestjs-command';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ScheduleModule.forRoot(),
    GithubModule,
    CommandModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
