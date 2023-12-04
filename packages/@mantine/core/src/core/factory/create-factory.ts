import { FactoryPayload } from './factory';
import { PolymorphicFactoryPayload } from './polymorphic-factory';

export type Factory<Payload extends FactoryPayload> = Payload;
export type PolymorphicFactory<Payload extends PolymorphicFactoryPayload> = Payload;
