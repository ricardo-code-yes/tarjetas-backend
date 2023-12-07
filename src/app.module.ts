import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CardsModule } from './cards/cards.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: 'mongodb+srv://ricardo-prueba:Df7wZ5TXEd6lJGHP@cluster0.rxbw1cc.mongodb.net/ricardo-prueba?retryWrites=true&w=majority',
        connectionFactory: (connection) => {
          // Configurar el nivel de log de Mongoose a nivel de instancia
          connection.set('debug', (collectionName, method, query) => {
            Logger.debug(
              `${collectionName}.${method}`,
              JSON.stringify(query),
              'MongooseQuery',
            );
          });
          return connection;
        },
      }),
    }),
    CardsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
