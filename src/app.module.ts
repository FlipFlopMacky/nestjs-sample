import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/User.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST_DEVELOPMENT || 'localhost',
      port: parseInt(process.env.DATABASE_PORT_DEVELOPMENT || '5432'),
      username: process.env.DATABASE_USERNAME_DEVELOPMENT || 'root',
      password: process.env.DATABASE_PASSWORD_DEVELOPMENT || 'password',
      database: process.env.DATABASE_NAME_DEVELOPMENT || 'test_db',
      entities: [User],
      synchronize: false,
      logging: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
