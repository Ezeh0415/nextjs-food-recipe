export default async function featchTea(url) {
    const res = await fetch(url);
  
    if (!res.ok) {
      throw new Error('Failed to fetch posts');
    }
  
    const posts = await res.json();
    const {status,results,data} = posts
    const {recipes} = data;
    return recipes;
  }