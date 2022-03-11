import { Resolver, Query, Args } from '@nestjs/graphql';
import { UseInterceptors } from '@nestjs/common';
import { TransformInterceptor } from 'src/common/middleware/transform.interceptor';

@UseInterceptors(TransformInterceptor)
@Resolver()
export class AppResolver {
  @Query(() => String)
  helloWorld(): string {
    return 'Hello World!';
  }
  @Query(() => String)
  hello(@Args('name') name: string): string {
    return `Hello ${name}!`;
  }
}
