<template>
  <div class="hello">
   <b-navbar toggleable="md" type="dark" variant="primary">
  <b-nav-toggle target="nav_collapse"></b-nav-toggle>
  <b-navbar-brand href="#">Hackathoner</b-navbar-brand>
  <b-collapse is-nav id="nav_collapse">
    <b-nav is-nav-bar>
      <b-nav-item href="#">All Hackathons</b-nav-item>
      <b-nav-item href="#">My Hackathons</b-nav-item>
    </b-nav>
    <!-- Right aligned nav items -->
    <b-nav is-nav-bar class="ml-auto">
      <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form>
      <b-nav-item-dropdown right>
        <!-- Using button-content slot -->
        <template slot="button-content">
          <em>User</em>
        </template>
        <b-dropdown-item href="#">Profile</b-dropdown-item>
        <b-dropdown-item href="#">Signout</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-nav>
  </b-collapse>
</b-navbar> 

<b-row class="maincontent">
        <b-col xl="3" lg="4" md="6" sm="12" v-for="hackathon in hackathons">
          <card v-bind:imglink="hackathon.someLink" 
                v-bind:text="hackathon.someText" 
                v-bind:title="hackathon.someTitle"
                v-bind:id="hackathon.id">        
          </card>
        </b-col>
    </b-row>
  </div>
</template>

<script>
import Card from './Card.vue'

export default {
  name: 'hello',
  components: {
    Card
  },
  data () {
    return {
      hackathons: [
        {
          id: "1",
          someLink: "../static/img/s7.png",
          someText: "Первый хакатон, который проходит при поддержке авиакомпании. Только 50 отобранных команд смогут побороться за главный приз 600 000 рублей в 5 номинациях. ",
          someTitle: "#s7hackathon",
        },
        {
          id: "2",
          someLink: "../static/img/mABBYYlity.png",
          someText: "24-часовой Хакатон по разработке сервисов для мобильных платформ с применением технологий интеллектуальной обработки информации, организованный компанией ABBYY - мировым разработчиком решений в этой области.",
          someTitle: "mABBYYlity",
        },
        {
          id: "3",
          someLink: "../static/img/otkrutue.png",
          someText: "Банк «Открытие» проведет хакатон для разработчиков Codility​ в рамках серии хакатонов Open Fights. На хакатоне участники выберут одно из розничных банковских направлений и, используя открытый API банка, за два дня напишут мобильное или веб-приложение.",
          someTitle: "Codility",
        },
        {
          id: "4",
          someLink: "../static/img/funtech.png",
          someText: "Хакатон — это отличная возможность развить свой проект, дополнить команду разработчиками, дизайнерами, маркетологами, проконсультироваться с ведущими экспертами в области, а также получить денежные призы и возможность пройти отбор в главный FunTech-акселератор страны — FunCubator.",
          someTitle: "FunTech Hackathon",
        },
        {
          id: "5",
          someLink: "../static/img/luxoft.png",
          someText: "Не упустите уникальную возможность всего за 24 часа развить свои навыки в CV, познакомиться с ведущими специалистами в этой области, выиграть крутые призы от Luxoft и, самое главное, хакнуть поистине непростую задачу!",
          someTitle: "HackCV",
        }
      ]
    }
  }
}

</script>

<style>
.maincontent {
  margin: 10px;
}
</style>