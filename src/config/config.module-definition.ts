import { ConfigurableModuleBuilder } from "@nestjs/common";
import { ConfigModuleOptions } from "./interfaces/config-module-options.interface";

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN, OPTIONS_TYPE, ASYNC_OPTIONS_TYPE } = 
    // new ConfigurableModuleBuilder<ConfigModuleOptions>().build();
    new ConfigurableModuleBuilder<ConfigModuleOptions>().setFactoryMethodName('createConfigOptions')
    .setExtras(
        {
            isGlobal: true,
        },
        // (definition, extras) => ({
        //     ..definition,
        //     global: extras.isGlobal
        // }),
    )
    .build();