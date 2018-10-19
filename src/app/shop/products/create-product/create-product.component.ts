import { ProductsService } from "./../state/products.service";
import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-create-product",
  templateUrl: "./create-product.component.html",
  styleUrls: ["./create-product.component.css"]
})
export class CreateProductComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl("", Validators.required),
    price: new FormControl("", Validators.required),
    emoji: new FormControl("", Validators.required)
  });

  constructor(
    public activeModal: NgbActiveModal,
    private productsService: ProductsService
  ) {}

  ngOnInit() {}

  onSave() {
    const { value, valid } = this.form;
    if (valid && EMOJIS[value.emoji.toUpperCase()]) {
      value.emoji = EMOJIS[value.emoji.toUpperCase()];

      this.productsService.create(value).subscribe(() => {
        this.activeModal.close("Saved");
      });
    }
  }
}

const EMOJIS = {
  GREEN_APPLE: "🍏",
  RED_APPLE: "🍎",
  PEAR: "🍐",
  TANGERINE: "🍊",
  LEMON: "🍋",
  BANANA: "🍌",
  WATERMELON: "🍉",
  GRAPES: "🍇",
  STRAWBERRY: "🍓",
  MELON: "🍈",
  CHERRY: "🍒",
  PEACH: "🍑",
  PINEAPPLE: "🍍",
  TOMATO: "🍅",
  EGG_PLANT: "🍆",
  HOT_PEPPER: "🌶",
  EAR_OF_MAIZE: "🌽",
  ROASTED_SWEET_POTATO: "🍠",
  HONEY_POT: "🍯",
  BREAD: "🍞",
  CHEESE: "🧀",
  POULTRY_LEG: "🍗",
  MEAT_ON_BONE: "🍖",
  FRIED_SHRIMP: "🍤",
  COOKING: "🍳",
  HAMBURGER: "🍔",
  FRENCH_FRIES: "🍟",
  HOT_DOG: "🌭",
  SLICE_OF_PIZZA: "🍕",
  SPAGHETTI: "🍝",
  TACO: "🌮",
  BURRITO: "🌯",
  STEAMING_BOWL: "🍜",
  POT_OF_FOOD: "🍲",
  FISH_CAKE: "🍥",
  SUSHI: "🍣",
  BENTO_BOX: "🍱",
  CURRY_AND_RICE: "🍛",
  RICE_BALL: "🍙",
  COOKED_RICE: "🍚",
  RICE_CRACKER: "🍘",
  ODEN: "🍢",
  DANGO: "🍡",
  SHAVED_ICE: "🍧",
  ICE_CREAM: "🍨",
  SOFT_ICE_CREAM: "🍦",
  SHORT_CAKE: "🍰",
  BIRTHDAY_CAKE: "🎂"
};
