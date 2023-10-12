class CreateEquipment < ActiveRecord::Migration[7.0]
  def change
    create_table :equipment do |t|
      t.string :name
      t.string :serial_number
      t.date :acquisition_date
      t.string :responsible_user
      t.references :company, null: false, foreign_key: true

      t.timestamps
    end
  end
end
