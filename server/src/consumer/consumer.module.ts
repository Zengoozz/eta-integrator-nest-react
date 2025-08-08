import { Module } from '@nestjs/common';
import { ConsumerInvoicesController } from './controllers/consumer.invoices.controller';
import { ConsumerAuthController } from './controllers/consumer.auth.controller';

@Module({
  controllers: [ConsumerInvoicesController, ConsumerAuthController],
})
export class ConsumerModule {}
