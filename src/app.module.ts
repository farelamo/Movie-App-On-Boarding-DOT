import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { TagsModule } from './tags/tags.module';
import 'dotenv/config'

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    logging: true,
    entities: [],
    autoLoadEntities: true,
    synchronize: true,
  }),
    TagsModule]
})
export class AppModule {}
