from time import time
import sys
import boto3

client = boto3.client('cloudfront')

def get_id(url):
   paginator = client.get_paginator('list_distributions')
   response_iterator = paginator.paginate()
   for i in response_iterator:
       for j in i['DistributionList']['Items']:
           if j['Aliases']['Items'][0] == url:
               return j['Id']


for url in ['www.murielhol.com', 'murielhol.com']:
    cf_id = get_id(url)
    response = client.create_invalidation(
        DistributionId=cf_id,
        InvalidationBatch={
            'Paths': {
                'Quantity': 1,
                'Items': [
                    '/*'
                    ],
                },
            'CallerReference': str(time()).replace(".", "")
            }
        )
    print(response)