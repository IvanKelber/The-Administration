class User < ApplicationRecord
  before_save { self.email = email.downcase }

  $VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
  $VALID_PASSWORD_REGEX = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{7,}$/
  validates(:name,presence:true,length:{maximum:50})
  validates(:email,presence:true,length:{maximum:255},
            format: {with:$VALID_EMAIL_REGEX},
            uniqueness: {case_sensitive: false});

  has_secure_password
  validates :password, presence: true, length: { minimum: 7 },
            format: {with:$VALID_PASSWORD_REGEX, multiline:true}, allow_nil: true


end
