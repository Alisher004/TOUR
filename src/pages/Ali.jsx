import React, {useState, useEffect} from 'react'

function Ali() { 
    const [post, setPost] = useState([]);
    const [photos, setPhotos] = useState([]);
    const [userId, setUserId] = useState(0);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    async function getPost() {
        try {
            const res = await apiClient.get('/');
            setPost(res.data);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    async function getPhotos() {
        try {
            const result = await apiClient.get("/photos");
            setPhotos(result.data);
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPost();
        getPhotos();
    }, []);

    async function handleSendPost() {
        const payload = {
            title,
            body,
            userId,
        };

        try {
            const res = await apiClient.post('/', payload);
            console.log(res);

            if (res.status == 201) {
                alert("Successfully created");
                setTitle("");
                setBody("");
                setUserId(0);
            }
        } catch (error) {
            console.log(error);
        }
    }

    async function deletePost(id) {
        try {
            const res = await apiClient.delete(`/${id}`);
            console.log(res);
            alert("Successfully deleted");
            getPost(); 
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" value={body} onChange={(e) => setBody(e.target.value)} />
            <input type="number" value={userId} onChange={(e) => setUserId(e.target.value)} />
            <button onClick={handleSendPost}>Send Post</button>
            <div className='wrapper'>
            {
            post.slice(0, 3).map((item) => (
                <div key={item.id} className='item-card'>
                    <img src={item.image} alt="" />
                    <div className='box'>
                        <h3>name: "{item.title}"</h3>
                        <p>category: {item.category}</p>
                        <p>number: "{item.number}"</p>
                        <p>price: {item.price}</p>
                        <button onClick={() => deletePost(item.id)}>Delete</button>
                    </div>
                </div>
            ))
            }
        </div>
    </div>
  )
}

export default Ali
