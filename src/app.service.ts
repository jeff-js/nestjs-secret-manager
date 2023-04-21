import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';

@Injectable()
export class AppService {
  private readonly configService: ConfigService;

  constructor(
    configService: ConfigService,
    @Inject('DATA_SOURCE') private dataSource: DataSource,
  ) {
    this.configService = configService;
  }
  getHello(): string {
    console.log(this.dataSource.manager.connection);
    return this.configService.get('database');
  }
}
