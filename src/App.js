import logo from './logo.svg';
import './App.css';
function Header(props){
  console.log('props', props, props.title)
  return <header>
    <h1><a href="/" onClick={(event)=>{
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a></h1>
  </header>
}

function Nav(props){
  const lis=[]
  for(let i=0; i<props.topics.length; i++){
    let t = props.topics[i]
    //key, 자동으로 생성하는 경우 react가 이 태그들을 추적해야 하므로 key를 줘서 성능을 높힘
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/'+t.id} onClick={event=>{
        event.preventDefault();
        props.onChangeMode(event.target.id); //nav에 있는 id값을 띄워주기 위해 target함수를 같이 이용해 id값을 가져옴
      }}>{t.title}</a>
      </li>)
  }
  return <nav>
     <ol>
      {lis}
    </ol>
  </nav>
}

function Article(props){
  return <article>
   <h2>{props.title}</h2>
    {props.body} 
  </article>
}


function App() {
  const topics = [
    {id:1, title:'html' ,body:'html is...'},
    {id:2, title:'css' ,body:'css is...'},
    {id:3, title:'js' ,body:'js is...'}
  ]
  return (
    <div>
      <Header title="REACT" onChangeMode={()=>{
      alert('Header');
    }}></Header>
      <Nav topics={topics} onChangeMode={(id)=>{
      alert(id);
      }}></Nav>
      <Article title="Welcome" body="Hello, WEB"></Article>
    </div>
  );
}

export default App;
