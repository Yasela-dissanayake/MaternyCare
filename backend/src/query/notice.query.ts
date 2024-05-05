export const QUERY = {
<<<<<<< HEAD
    SELECT_NOTICES: 'SELECT * FROM notices ORDER BY created_at DESC LIMIT 50',
    SELECT_NOTICE: 'SELECT * FROM notices WHERE id = ?',
    CREATE_NOTICE: 'INSERT INTO notices (first_name, last_name, email, address, diagnosis, phone, status, image_url) VALUES(?, ?, ?, ?, ?, ?, ?, ?)',
    UPDATE_NOTICE: 'UPDATE notices SET first_name = ?, last_name = ?, email = ?, address = ?, diagnosis = ?, phone = ?, status = ?, image_url = ? WHERE id = ?',
    DELETE_NOTICE: 'DELETE FROM notices WHERE id = ?'
};
=======
  SELECT_NOTICES: "SELECT * FROM notices ORDER BY created_at DESC LIMIT 50",
  SELECT_NOTICE: "SELECT * FROM notices WHERE id = ?",
  CREATE_NOTICE:
    "INSERT INTO notices (title, sub_title, message, image_url) VALUES(?, ?, ?, ?)",
  UPDATE_NOTICE:
    "UPDATE notices SET title = ?, sub_title = ?, message = ?, image_url = ?",
  DELETE_NOTICE: "DELETE FROM notices WHERE id = ?",
};
>>>>>>> 70e8ba9b (WIP)
