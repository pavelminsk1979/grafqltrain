import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserEntity } from './user/user.entity';
import { UserResolver } from './resolvers/user.resolver';
import { UsersService } from './user/user-service';
import { UserRepository } from './user/user-repository';
import { PostResolver } from './resolvers/post/post.resolver';
import { PostEntity } from './post/post.entity';
import { PostService } from './post/post-service';
import { PostRepository } from './post/post-repository';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: 'schema.gql',
      /*     
           Параметр autoSchemaFile: 'schema.gql' указывает, 
       что NestJS будет генерировать файл схемы GraphQL 
     с именем schema.gql, который будет содержать автоматически
     созданную схему на основе всех ваших 
     моделей и резолверов. 
       в данном примере на основе UserModel  сгенерируется файл 
     */
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'pavel',
      database: 'graftrain',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([UserEntity, PostEntity]),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    UserResolver,
    UsersService,
    UserRepository,
    PostResolver,
    PostService,
    PostRepository,
  ],
})
export class AppModule {}
