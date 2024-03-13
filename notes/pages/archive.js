
export default function Archive() {
  const learn = [
    {
      itemName : "header" ,
      itemType : 'nav',
    },
    {
      itemName : 'sideBar',
      itemType : 'home',
    },
    {
      itemName : 'index',
      itemType : 'content'
    }
  ]
    return (
      <div className='flex h-full flex-col justify-center items-center'>
        <h1 className='text-4xl mb-5 font-bold'>archive</h1>
        <span className='text-7xl text-blac'><span class="material-symbols-outlined">undo</span>📞jh</span>
        {learn.map(({itemName,itemType})=>{
          return(
            <>
              <div>{itemName}</div>
              <div>{itemType}</div>
            </>
          )
        })}
      </div>
    );
  }
  