/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { util, configure } from 'protobufjs/minimal';
import * as Long from 'long';
import { Observable } from 'rxjs';
import { Metadata } from '@grpc/grpc-js';

export const protobufPackage = 'CronDemo';

export interface Id {
    id: number;
  }
  
  export const CRON_DEMO_PACKAGE_NAME = 'CronDemo';
  
  export interface CronDemoServiceClient {
    echo(request: Id, metadata?: Metadata): Observable<Id>;
  }
  
  export interface CronDemoServiceController {
    echo(request: Id, metadata?: Metadata): Promise<Id> | Observable<Id> | Id;
  }
  
  export function CronDemoServiceControllerMethods() {
    return function (constructor: Function) {
      const grpcMethods: string[] = ['echo'];
      for (const method of grpcMethods) {
        const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
        GrpcMethod('CronDemoService', method)(constructor.prototype[method], method, descriptor);
      }
      const grpcStreamMethods: string[] = [];
      for (const method of grpcStreamMethods) {
        const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
        GrpcStreamMethod('CronDemoService', method)(constructor.prototype[method], method, descriptor);
      }
    };
  }
  
  export const CRON_DEMO_SERVICE_NAME = 'CronDemoService';
  
  // If you get a compile-error about 'Constructor<Long> and ... have no overlap',
  // add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
  if (util.Long !== Long) {
    util.Long = Long as any;
    configure();
  }
  