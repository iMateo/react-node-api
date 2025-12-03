import { useState, useEffect } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newItemName, setNewItemName] = useState('');
  const [newItemDesc, setNewItemDesc] = useState('');

  // Fetch items from API
  const fetchItems = async () => {
    try {
      const response = await fetch('/api/items');
      if (!response.ok) throw new Error('Failed to fetch items');
      const data = await response.json();
      setItems(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // Add new item
  const handleAddItem = async (e) => {
    e.preventDefault();
    if (!newItemName.trim()) return;

    try {
      const response = await fetch('/api/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: newItemName,
          description: newItemDesc
        })
      });
      if (!response.ok) throw new Error('Failed to add item');
      setNewItemName('');
      setNewItemDesc('');
      fetchItems();
    } catch (err) {
      setError(err.message);
    }
  };

  // Delete item
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/items/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) throw new Error('Failed to delete item');
      fetchItems();
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) {
    return <div className="container"><p>Loading...</p></div>;
  }

  return (
    <div className="container">
      <header>
        <h1>React Node API</h1>
        <p>Full-stack boilerplate with React frontend and Node.js/Express backend</p>
      </header>

      {error && <div className="error">{error}</div>}

      <section className="add-form">
        <h2>Add New Item</h2>
        <form onSubmit={handleAddItem}>
          <input
            type="text"
            placeholder="Item name"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Description (optional)"
            value={newItemDesc}
            onChange={(e) => setNewItemDesc(e.target.value)}
          />
          <button type="submit">Add Item</button>
        </form>
      </section>

      <section className="items-list">
        <h2>Items ({items.length})</h2>
        {items.length === 0 ? (
          <p>No items yet. Add your first item above!</p>
        ) : (
          <ul>
            {items.map(item => (
              <li key={item.id}>
                <div className="item-info">
                  <strong>{item.name}</strong>
                  {item.description && <span>{item.description}</span>}
                </div>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default App;
