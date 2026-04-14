resource "aws_dynamodb_table" "movies" {
  name         = "Movies"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "movieId"

  attribute {
    name = "movieId"
    type = "S"
  }
}

resource "aws_dynamodb_table" "recommendations" {
  name         = "Recommendations"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "userId"

  attribute {
    name = "userId"
    type = "S"
  }
}