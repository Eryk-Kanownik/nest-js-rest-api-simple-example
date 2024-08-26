import { Module } from '@nestjs/common';
import { UsersModule } from './_modules/users.module';

@Module({
  imports: [UsersModule],
})
export class AppModule {}
