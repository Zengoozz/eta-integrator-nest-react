import { Module } from '@nestjs/common';
import { CoreSettingStepController } from './controllers/core.setting-step.controller';
import { ResponseProcessorService } from './services/response-processor.service';
import { RequestFactoryService } from './services/request-factory.service';

@Module({
  controllers: [CoreSettingStepController],
  providers: [RequestFactoryService, ResponseProcessorService],
})
export class CoreModule {}
