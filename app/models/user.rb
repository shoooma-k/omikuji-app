class User < ApplicationRecord
  has_secure_password

  validates :email, uniqueness: { message: "このメールアドレスは既に登録されています" }
end
