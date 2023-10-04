import { DataSource } from 'typeorm/data-source';
import { config } from 'dotenv';
import { ConfigService } from '@nestjs/config';
import { UserRepository } from 'src/user/repository/user.repository';

config();

const configService = new ConfigService();
export default new DataSource({
  type: 'sqlite',
  database: configService.get('DB_NAME'),
  synchronize: true,
  logging: true,
  entities: [UserRepository],
});
