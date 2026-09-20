import { useMemo, useState } from 'react'
import { useDisclosure } from '@mantine/hooks'
import { Header, MobileNav, Hero, PromoCards, SectionTitle, ProductGrid, Recommendations, CollectionButton, FinalCTA, Footer, CartDrawer, ProductModal, products, type Product } from './components'

export default function App(){
  const [mobileOpen,{open:openMobile,close:closeMobile}]=useDisclosure(false)
  const [cartOpen,{open:openCart,close:closeCart}]=useDisclosure(false)
  const [selected,setSelected]=useState<Product|null>(null)
  const [search,setSearch]=useState('')
  const [cart,setCart]=useState<Product[]>([])
  const [liked,setLiked]=useState<number[]>([])
  const filtered=useMemo(()=>{const q=search.trim().toLowerCase();return products.filter(p=>!q||`${p.name} ${p.category}`.toLowerCase().includes(q))},[search])
  const addToCart=(p:Product)=>setCart(items=>[...items,p])
  const removeFromCart=(index:number)=>setCart(items=>items.filter((_,i)=>i!==index))
  const toggleLike=(id:number)=>setLiked(items=>items.includes(id)?items.filter(x=>x!==id):[...items,id])
  return <div className="page">
    <Header cartCount={cart.length} search={search} onSearchChange={setSearch} onMobileMenu={openMobile} onCart={openCart}/>
    <MobileNav opened={mobileOpen} onClose={closeMobile}/>
    <main>
      <Hero/><PromoCards/>
      <SectionTitle title="Newly Dropped Collections" subtitle="Fresh styles, iconic silhouettes, and everyday pairs built for your next move."/>
      <ProductGrid id="new" products={filtered} liked={liked} onLike={toggleLike} onAdd={addToCart} onView={setSelected}/>
      <CollectionButton/>
      <SectionTitle title="Most Recommend Collections for You" subtitle="These are the styles our community keeps coming back for."/>
      <Recommendations/>
      <SectionTitle title="Summer Collections" subtitle="Lightweight classics made for long days, warm weather, and effortless comfort."/>
      <ProductGrid products={products} liked={liked} onLike={toggleLike} onAdd={addToCart} onView={setSelected}/>
      <CollectionButton/><FinalCTA/>
    </main>
    <Footer/>
    <CartDrawer opened={cartOpen} onClose={closeCart} cart={cart} onRemove={removeFromCart}/>
    <ProductModal product={selected} onClose={()=>setSelected(null)} onAdd={(product)=>{addToCart(product);openCart()}}/>
  </div>
}
