// @ts-nocheck
/**
 * Argo Workflows API
 * Argo Workflows is an open source container-native workflow engine for orchestrating parallel jobs on Kubernetes. For more information, please see https://argoproj.github.io/argo-workflows/
 *
 * The version of the OpenAPI document: VERSION
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { IoArgoprojEventsV1alpha1EventSourceFilter } from './ioArgoprojEventsV1alpha1EventSourceFilter';
import { IoArgoprojEventsV1alpha1TLSConfig } from './ioArgoprojEventsV1alpha1TLSConfig';
import { IoK8sApiCoreV1SecretKeySelector } from './ioK8sApiCoreV1SecretKeySelector';

export class IoArgoprojEventsV1alpha1RedisStreamEventSource {
    'consumerGroup'?: string;
    'db'?: number;
    'filter'?: IoArgoprojEventsV1alpha1EventSourceFilter;
    'hostAddress'?: string;
    'maxMsgCountPerRead'?: number;
    'metadata'?: { [key: string]: string; };
    'password'?: IoK8sApiCoreV1SecretKeySelector;
    /**
    * Streams to look for entries. XREADGROUP is used on all streams using a single consumer group.
    */
    'streams'?: Array<string>;
    'tls'?: IoArgoprojEventsV1alpha1TLSConfig;
    'username'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "consumerGroup",
            "baseName": "consumerGroup",
            "type": "string"
        },
        {
            "name": "db",
            "baseName": "db",
            "type": "number"
        },
        {
            "name": "filter",
            "baseName": "filter",
            "type": "IoArgoprojEventsV1alpha1EventSourceFilter"
        },
        {
            "name": "hostAddress",
            "baseName": "hostAddress",
            "type": "string"
        },
        {
            "name": "maxMsgCountPerRead",
            "baseName": "maxMsgCountPerRead",
            "type": "number"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "IoK8sApiCoreV1SecretKeySelector"
        },
        {
            "name": "streams",
            "baseName": "streams",
            "type": "Array<string>"
        },
        {
            "name": "tls",
            "baseName": "tls",
            "type": "IoArgoprojEventsV1alpha1TLSConfig"
        },
        {
            "name": "username",
            "baseName": "username",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojEventsV1alpha1RedisStreamEventSource.attributeTypeMap;
    }
}
