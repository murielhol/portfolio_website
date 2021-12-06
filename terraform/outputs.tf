#The identifier for the distribution. For example: EDFDVBD632BHDS5.
output "wwww_cf_id" { 
  value = aws_cloudfront_distribution.www_s3_distribution.id
}
output "root_cf_id" { 
  value = aws_cloudfront_distribution.root_s3_distribution.id
}