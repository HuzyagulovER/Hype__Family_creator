var familyCreator = new Vue({ //Cre 2AC
	el: '#app',
	data: {
		active: true,
		header: "ოჯახები შტატში",
		page: 0,
		price: 0,
		needlvl: 0,
		playerlvl: 0,
		familycount: 0,
		createname: null,
		createcount: 0,
		allprices: 0,
		multiplier: 0,
		families: [
			['SYNDICATE ', 'MIKE_ROBOX', 20, 10, 'images/logo.png'],
			['SYNDICATE ', 'MIKE_ROBOX', 20, 10, 'images/logo.png'],
			['SYNDICATE ', 'MIKE_ROBOX', 20, 10, 'images/logo.png'],
			['SYNDICATE ', 'MIKE_ROBOX', 20, 10, 'images/logo.png'],
			['SYNDICATE ', 'MIKE_ROBOX', 20, 10, 'images/logo.png'],
			['SYNDICATE ', 'MIKE_ROBOX', 20, 10, 'images/logo.png'],
			['SYNDICATE ', 'MIKE_ROBOX', 20, 10, 'images/logo.png'],
			['SYNDICATE ', 'MIKE_ROBOX', 20, 10, 'images/logo.png'],
			['SYNDICATE ', 'MIKE_ROBOX', 20, 10, 'images/logo.png'],
			['SYNDICATE ', 'MIKE_ROBOX', 20, 10, 'images/logo.png'],
			['SYNDICATE ', 'MIKE_ROBOX', 20, 10, 'images/logo.png'],
			['SYNDICATE ', 'MIKE_ROBOX', 20, 10, 'images/logo.png'],
			['SYNDICATE ', 'MIKE_ROBOX', 20, 10, 'images/logo.png'],		//All of families for dev. Delete for use.
		],
		familyurl: "",
		imgupload: false,
	},
	methods: {
		setinfo(json) {
			this.price = json[0]
			this.needlvl = json[1]
			this.playerlvl = json[3]
			this.multiplier = json[4]
			this.familycount = json[2]
			this.allprices = json[0]
		},
		loadFamilies() {
			mp.trigger("loadlistfamilies", "client");
		},
		changeRad(index) {
			switch (index) {
				case 0:
					this.allprices = this.price
					break;
				case 1:
					this.allprices = this.price + this.multiplier
					break;
				case 2:
					this.allprices = this.price + this.multiplier * 2
					break;
				case 3:
					this.allprices = this.price + this.multiplier * 3
					break;
			};
			toggleCheck();
		},
		replaceImg() {
			if (this.imgupload) this.familyurl = "images/hype.png"
		},
		changePage(value) {
			// if (value == 2) this.loadFamilies();
			this.page = value;
		},
		createFamily() {
			mp.trigger("createFamily", this.createname, this.createcount, this.familyurl);
		},
		closeMenu() {
			this.active = false
			this.page = 0
			mp.trigger("closeFamilyCreatorMenu")
		},
	}
});

//	Script for radioButtons
let radioButtons;
function toggleCheck() {
	radioButtons = document.querySelectorAll('.pageCreate input[type=radio]');
	for (let i = 0; i < radioButtons.length; i++) {
		if (radioButtons[i].checked) {
			radioButtons[i].parentElement.classList.add('_active');
		} else {
			radioButtons[i].parentElement.classList.remove('_active');
		}
	}
}
toggleCheck();
for (let i = 0; i < radioButtons.length; i++) {
	radioButtons[i].parentElement.addEventListener('click', toggleCheck);
}


