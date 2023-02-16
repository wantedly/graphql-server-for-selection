/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./../../context"
import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    datetime<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
    date<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "Date";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    datetime<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
    date<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Date";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  ProjectFilterInput: { // input type
    keyword?: string | null; // String
    lookingFor?: string | null; // String
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  Date: Date
  DateTime: Date
}

export interface NexusGenObjects {
  Book: { // root type
    author: string; // String!
    id: number; // Int!
    title: string; // String!
  }
  Project: { // root type
    coverImageUrl: string; // String!
    description: string; // String!
    hiringType?: string | null; // String
    howDescription: string; // String!
    id: number; // Int!
    lookingFor?: string | null; // String
    publishedAt: NexusGenScalars['DateTime']; // DateTime!
    title: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    whatDescription: string; // String!
    whyDescription: string; // String!
  }
  Query: {};
  Staffing: { // root type
    id: number; // Int!
    userId: number; // Int!
  }
  User: { // root type
    avatar?: string | null; // String
    id: number; // Int!
    name: string; // String!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Book: { // field return type
    author: string; // String!
    id: number; // Int!
    title: string; // String!
  }
  Project: { // field return type
    coverImageUrl: string; // String!
    description: string; // String!
    hiringType: string | null; // String
    howDescription: string; // String!
    id: number; // Int!
    lookingFor: string | null; // String
    publishedAt: NexusGenScalars['DateTime']; // DateTime!
    staffings: NexusGenRootTypes['Staffing'][]; // [Staffing!]!
    title: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    whatDescription: string; // String!
    whyDescription: string; // String!
  }
  Query: { // field return type
    books: Array<NexusGenRootTypes['Book'] | null> | null; // [Book]
    project: NexusGenRootTypes['Project'] | null; // Project
    projects: Array<NexusGenRootTypes['Project'] | null> | null; // [Project]
  }
  Staffing: { // field return type
    id: number; // Int!
    user: NexusGenRootTypes['User']; // User!
    userId: number; // Int!
  }
  User: { // field return type
    avatar: string | null; // String
    id: number; // Int!
    name: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  Book: { // field return type name
    author: 'String'
    id: 'Int'
    title: 'String'
  }
  Project: { // field return type name
    coverImageUrl: 'String'
    description: 'String'
    hiringType: 'String'
    howDescription: 'String'
    id: 'Int'
    lookingFor: 'String'
    publishedAt: 'DateTime'
    staffings: 'Staffing'
    title: 'String'
    updatedAt: 'DateTime'
    whatDescription: 'String'
    whyDescription: 'String'
  }
  Query: { // field return type name
    books: 'Book'
    project: 'Project'
    projects: 'Project'
  }
  Staffing: { // field return type name
    id: 'Int'
    user: 'User'
    userId: 'Int'
  }
  User: { // field return type name
    avatar: 'String'
    id: 'Int'
    name: 'String'
  }
}

export interface NexusGenArgTypes {
  Query: {
    project: { // args
      id: number; // Int!
    }
    projects: { // args
      filter?: NexusGenInputs['ProjectFilterInput'] | null; // ProjectFilterInput
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}