terraform {
  required_version = "~> 0.14"

  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "~> 3.0"
    }
  }

  backend "s3" {
    bucket = "portfolio-website-backend"
    key = "prod/terraform.tfstate"
    region = "eu-west-1"
  }
}

provider "aws" {
  region = "eu-west-1"
}

# specifically for the SSL certificate. These need to be created in us-east-1 for Cloudfront to be able to use them
provider "aws" {
  alias = "acm_provider"
  region = "us-east-1"
}