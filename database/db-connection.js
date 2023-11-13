import * as SQLite from 'expo-sqlite';

// Conexão com o Banco de Dados do Sqlite
const DatabaseConnection = {
  getConnection: () => SQLite.openDatabase('database.db'),
};

export default DatabaseConnection;
