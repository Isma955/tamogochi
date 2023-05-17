const tamogochi = {
    name : 'egg',
    meal : 1,
    energy : 3,
    mood : 11,
    getStatus: function () {
        const mealText = this.meal < 3 ? 'Я голоден' : 'Я не голоден';
        const energyText = this.energy < 3 ? 'Я хочу спать' : 'Я не хочу спать';
        const moodText = this.mood < 3 ? 'Мне скучно' : 'мне весело';
        let isDead = 0
        if (this.meal <= 0 || this.energy <= 0 || this.mood <= 0) {
            isDead = 'умер :('
            console.log(isDead)
        }else {
            console.log(`Имя : ${this.name}, Еда: ${mealText} (${this.meal}), Энергия: ${energyText} (${this.energy}), Настроение: ${moodText} (${this.mood})`)
        }
        const euphoria = this.mood > 10 ? 'Я самый счастливый' : 'можно и лучше'
    },
    setName : function (name) {
        this.name = name
    },
    eat: function(){
        if(this.meal < 5 & this.mood < 5) {
            this.meal++;
        }
        
        this.mood--

    },
    sleep: function() {
        if(this.energy < 5 & this.meal < 5) {
    this.energy++;
        }

        this.meal--;

    },
    play: function() {
        if(this.mood < 5 & this.energy < 5) {
        this.mood++;
        }

        this.energy--;

    },


}

tamogochi.getStatus()
tamogochi.setName('Andy')
tamogochi.getStatus()
tamogochi.eat()
tamogochi.sleep()
tamogochi.play()
tamogochi.getStatus()
















