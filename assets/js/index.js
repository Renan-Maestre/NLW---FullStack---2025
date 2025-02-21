const app = document.getElementById("app")

const users = [
    {
        email: 'teste@gmail.com',
        phone: '99999999999',
        ref:100,
        refBy: null
    },
    {
        email: 'tuste@gmail.com',
        phone: '99999999999',
        ref:200,
        refBy: 100
    },
    {
        email: 'toste@gmail.com',
        phone: '99999999999',
        ref:300,
        refBy: 100
    }
]


const getUser = (userData) =>{
    return users.find((user)=>{
        return user.email == userData.email
    })
}


const getTotalSubscribers = (userData) =>{
    const subs = users.filter((user) =>{
        return user.refBy == userData.ref
    })
    return subs.length
}




const showInvite = (userData) =>{
    app.innerHTML = `
        <input type="text" id="link" value="https://evento.com?ref=${userData.ref}" disabled>

        <div id="stats">
        <h4>${getTotalSubscribers(userData)}<h4/>
        <p>Inscrições feitas<p/>
        <div/>
    `
    
}


const saveUser = (userData) =>{
    const newUser = {
        ...userData,
        ref: Math.round(Math.random( ) * 4000),
        refBy: 100
    }

    users.push(newUser)
    return newUser


}


const formAction = () => {
    const form = document.getElementById("form")
    form.onsubmit = (event) =>{
        event.preventDefault()
        const formData = new FormData(form)
        const userData = {
            email: formData.get('email'),
            phone: formData.get('phone')
        }

        const user = getUser(userData)
        if (user) {
            showInvite(user)
        }else{
            const newUser = saveUser(userData)
            showInvite(newUserser)
        }


    }
}


const updateImageLink = () =>{
    document.querySelectorAll('img').forEach((img) =>{
        img.src = `https://raw.githubusercontent.com/maykbrito/my-public-files/main/nlw-19/logo.svg`
    })
}

const startApp = () =>{
    const content =  `
    <header>
        <img src="logo.svg" alt="logo">
        <h1>
            <span>CodeCraft</span><br>
            Summit 2025
        </h1>
    </header>
    <main>

      <section class="about">
        <div class="section-header">
          <h2>Sobre o evento</h2>
          <span>AO VIVO</span>

          <p>
            Um evento feito por e para desenvolvedores apaixonados por criar soluções inovadoras e compartilhar conhecimento. Vamos mergulhar nas últimas tendências em desenvolvimento de software, arquitetura de sistemas e tecnologias emergentes, com palestras, workshops e hackathons. <br>
            15 a 17 de março | Das 18h às 21h |
            Online & Gratuito
          </p>
        </div>

      </section>

      <section class="registration">
        <h2>Inscrição</h2>

        <form id="form">
          <div class="input-wrapper">
            <div class="input-group">
              <label for="email">
                <img src="https://raw.githubusercontent.com/maykbrito/my-public-files/main/nlw-19/mail.svg" alt="Email icon">
              </label>
              <input type="email" id="email" name="email" placeholder="E-mail">
            </div>


            <div class="input-group">
              <label for="phone">
                <img src= "https://raw.githubusercontent.com/maykbrito/my-public-files/main/nlw-19/phone.svg" alt="phone icon">

              </label>
              <input type="phone" id="phone" name="phone" placeholder="Telefone">
            </div>



          </div>
          <button>
            Cofirmar
            <img src="arrow.sgv" alt="Arrow right" class="src">
          </button>

        </form>
      </section>
    </main>
    <footer></footer>
    `

    app.innerHTML = content
    updateImageLink()
    formAction()
}
startApp()

document.getElementById("logo").onclick = () => startApp()