export interface DynamoDBItem {
    PK: string;
    SK: string;
    entityType: string;
    'GSI1-PK'?: string;
    'GSI1-SK'?: string;
    'GSI2-PK'?: string;
    'GSI2-SK'?: string;
    'GSI3-PK'?: string;
    'GSI3-SK'?: string;
    expiredAt?: string;
    createdAt: string;
}

export interface StockItem extends DynamoDBItem {
    stockId: string;
    value: number;
}
