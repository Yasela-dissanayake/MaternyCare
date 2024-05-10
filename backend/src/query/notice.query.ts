export const QUERY = {
  SELECT_NOTICES: "SELECT * FROM notices ORDER BY created_at DESC LIMIT 50",
  SELECT_NOTICE: "SELECT * FROM notices WHERE id = ?",
  CREATE_NOTICE:
    "INSERT INTO notices (title, sub_title, message, image_url) VALUES(?, ?, ?, ?)",
  UPDATE_NOTICE:
    "UPDATE notices SET title = ?, sub_title = ?, message = ?, image_url = ? WHERE id = ?",
  DELETE_NOTICE: "DELETE FROM notices WHERE id = ?",
};
