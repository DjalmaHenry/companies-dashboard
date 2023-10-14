namespace :user do
    desc "Create a user"
    task create: :environment do
      puts "Creating user..."
      User.create!(email: 'user@email.com', password: '123456a', password_confirmation: '123456a')
      puts "User created!"
    end
  end
  