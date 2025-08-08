import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './core/core.module';
import { ProviderModule } from './provider/provider.module';
import { ConsumerModule } from './consumer/consumer.module';
import { ProviderModule } from './provider/provider.module';

@Module({
  imports: [CoreModule, ProviderModule, ConsumerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
