<template>
   <nav>
  <ul class="menu" v-bind:class="{ active: isActive}">
    <li class="logo"><a href="#">V3 Services</a></li>
    <li class="item"><a href="#">Home</a></li>
    <li class="item"><a href="#">About</a></li>
    <li class="item has-submenu" 
      v-bind:class="{'submenu-active': isActiveService}" 
      @click="toggleService"
      >
      <a tabindex="0">Services</a>
      <ul class="submenu">
        <li class="subitem"><a href="#">Design</a></li>
        <li class="subitem"><a href="#">Development</a></li>
        <li class="subitem"><a href="#">SEO</a></li>
        <li class="subitem"><a href="#">Copywriting</a></li>
      </ul>
    </li>
    <li class="item has-submenu"
      v-bind:class="{'submenu-active': isActivePlans}"
      @click="togglePlans"
      >
      <a tabindex="0">Plans</a>
      <ul class="submenu">
        <li class="subitem"><a href="#">Freelancer</a></li>
        <li class="subitem"><a href="#">Startup</a></li>
        <li class="subitem"><a href="#">Enterprise</a></li>
      </ul>
    </li>
    <li class="item"><a href="#">Blog</a></li>
    <li class="item"><a href="#">Contact</a>
    </li>
    <li class="item button"><a href="#">Log In</a></li>
    <li class="item button secondary"><a href="#">Sign Up</a></li>
    <li class="toggle" @click="toggleMenu"><a href="#">
      
      <font-awesome-icon 
      v-if="!isActive"
      :icon="['fas', 'bars']" />
      <font-awesome-icon 
      v-if="isActive"
      :icon="['fas', 'times']" />
      </a></li>
  </ul>
</nav>


</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      isActive: false,
      isActiveService: false,
      isActivePlans: false
    }
  },
  methods: {

toggleMenu() {
  this.isActive = !this.isActive;
},
toggleService() {
  console.log("I am toggling service");
 this.isActiveService = !this.isActiveService;
 this.isActivePlans = false;
},
togglePlans() {
  this.isActivePlans = !this.isActivePlans;
  this.isActiveService = false;
},

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Basic styling */
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body {
  font-family: sans-serif;
  font-size: 16px;
}
nav {
  background: #222;
  padding: 0 15px;
}
a {
  color: white;
  text-decoration: none;
}
.menu,
.submenu {
  list-style-type: none;
}
.logo {
  font-size: 20px;
  padding: 7.5px 10px 7.5px 0;
}
.item {
  padding: 10px;
}
.item.button {
  padding: 9px 5px;
}
.item:not(.button) a:hover,
.item a:hover::after {
  color: #ccc;
}
/* Mobile menu */
.menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.menu li a {
  display: block;
  padding: 15px 5px;
}
.menu li.subitem a {
  padding: 15px;
}
.toggle {
  order: 1;
  font-size: 20px;
}
.item.button {
  order: 2;
}
.item {
  order: 3;
  width: 100%;
  text-align: center;
  display: none;
}
.active .item {
  display: block;
}
.button.secondary {
  /* divider between buttons and menu links */
  border-bottom: 1px #444 solid;
}
/* Submenu up from mobile screens */
.submenu {
  display: none;
}
.submenu-active .submenu {
  display: block;
}
.has-submenu i {
  font-size: 12px;
}
.has-submenu > a::after {
  font-family: "Font Awesome 5 Free";
  font-size: 12px;
  line-height: 16px;
  font-weight: 900;
  content: "\f078";
  color: white;
  padding-left: 5px;
}
.subitem a {
  padding: 10px 15px;
}
.submenu-active {
  background-color: #111;
  border-radius: 3px;
}

/* Tablet menu */
@media all and (min-width: 700px) {
  .menu {
    justify-content: center;
  }
  .logo {
    flex: 1;
  }
  .item.button {
    width: auto;
    order: 1;
    display: block;
  }
  .toggle {
    flex: 1;
    text-align: right;
    order: 2;
  }
  /* Button up from tablet screen */
  .menu li.button a {
    padding: 10px 15px;
    margin: 5px 0;
  }
  .button a {
    background: #0080ff;
    border: 1px royalblue solid;
  }
  .button.secondary {
    border: 0;
  }
  .button.secondary a {
    background: transparent;
    border: 1px #0080ff solid;
  }
  .button a:hover {
    text-decoration: none;
  }
  .button:not(.secondary) a:hover {
    background: royalblue;
    border-color: darkblue;
  }
}
/* Desktop menu */
@media all and (min-width: 960px) {
  .menu {
    align-items: flex-start;
    flex-wrap: nowrap;
    background: none;
  }
  .logo {
    order: 0;
  }
  .item {
    order: 1;
    position: relative;
    display: block;
    width: auto;
  }
  .button {
    order: 2;
  }
  .submenu-active .submenu {
    display: block;
    position: absolute;
    left: 0;
    top: 68px;
    background: #111;
  }
  .toggle {
    display: none;
  }
  .submenu-active {
    border-radius: 0;
  }
}


</style>
