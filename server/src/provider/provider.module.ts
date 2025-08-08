import { Module } from '@nestjs/common';
import { ProviderAuthController } from './controllers/provider.auth.controller';
import { ProviderInvoicesController } from './controllers/provider.invoices.controller';

@Module({
  controllers: [ProviderAuthController, ProviderInvoicesController],
})
export class ProviderModule {}
