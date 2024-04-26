import app from './app'
import './jobs/child'

const PORT = process.env.PORT || 8880;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});