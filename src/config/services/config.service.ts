import { Inject, Injectable } from "@nestjs/common";
import { MODULE_OPTIONS_TOKEN } from "../config.module-definition";
import { ConfigModuleOptions } from "../interfaces/config-module-options.interface";

@Injectable()
export class ConfigService {
    constructor(@Inject(MODULE_OPTIONS_TOKEN) private options: ConfigModuleOptions) {}
}