import styled from "styled-components";

export default styled.div`
  margin: 0;
  position: relative;
`;

export const Header = styled.div`
  position: fixed;
  height: 5rem;
  width: 100vw;
  border-bottom: 0.5px solid #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index:99;
  background-color:#fff;

  .content-left {
    display:flex;
    align-items:center;
    column-gap:20px;
    margin: 0 0 0 30px;

    img{
      margin-right:5rem;
      width:2.5rem;
      height:2.5rem;
    }

    .logo-text{
      font-size: 2em;
      font-weight: 600;
    }
  }

  .content-right {
    display:flex;
    align-items:center;
    column-gap:30px;
    margin: 0 30px 0 0;

    img{
      width:2.5rem;
      height:2.5rem;
      border-radius:50px;
    }
  }
`;
export const Sidebar = styled.div`
position:fixed;
width:200px;
height:calc(100vh - 5rem);
left:0;
top:5rem;
padding:30px 0;
display:flex;
justify-content:center;
border-right: 0.5px solid #e5e5e5;

button{
  border:none;
  max-height:2.8rem;
  background-color:none;
  border-radius:10px;
  padding:10px 20px;
  display:flex;
  align-items:center;
  justify-content:center;
  box-shadow:2px 2px 2px #3333;
  font-size:1.3rem;
  icon{
    font-size:;
  }
  span{
    margin-left:20px;
  }
}
`;

export const Sidebar2 = styled.div`
position:fixed;
width:70px;
height:calc(100vh - 5rem);
right:0;
top:5rem;
padding:40px 0;
text-align:center;
border-left:0.5px solid #e5e5e5;
display:flex;
align-items:center;
flex-direction:column;
row-gap:40px;
color:grey;
font-size:1.2rem;

hr{
  padding:0;
  margin:7px auto;
  text-center;
  height:2px;
  border:none;
  background-color:#e5e5e5;
  width:4rem;
}
`;

export const Body = styled.div`
position:relative;
width:calc(100% - 320px);
height:100%;
top:5rem;
right:70px;
left:200px;
overflow:hidden;
padding:30px;
color:#235b1c;

h4{
  padding:0;
  margin:0;
  font-size:1.5rem;
  text-align:center;
}

hr{
  padding:0;
  margin:7px auto;
  text-center;
  height:2px;
  border:none;
  background-color:#235b1c;
  width:4.5rem;
}

.cards{
  display:grid;
  grid-template-columns:1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  padding:20px;
}
`;

export const Cards = styled.div`
// height: 100px;
border:1px solid #e5e5e5;
box-shadow:2px 2px 2px grey;
border-radius:10px;
text-align:center;
color:#235b1c;

.title{
  font-size:16px;
  font-weight:600;
  padding:0 0 10px 0;
  border-bottom:1px solid #235b1c;
}

span{
  padding:0;
  margin:0;
}
`;
