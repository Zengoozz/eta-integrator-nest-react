import { Module } from '@nestjs/common';
import { CoreController } from './core.controller';
import { CoreSettingStepController } from './controllers/core.setting-step.controller';

@Module({
  controllers: [CoreController, CoreSettingStepController],
})
export class CoreModule {}
