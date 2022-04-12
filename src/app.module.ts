import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
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
  })]
})
export class AppModule {}
