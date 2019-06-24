const photo = document.querySelector(".photo");

// props
const props = document.querySelectorAll(".props input");

function handleChange() {
    console.log('==> ', this.name, this.value);
    const suffix = this.dataset.size || "";     // will be px for all except base-color, which does not has suffix
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

props.forEach(input => input.addEventListener("input", handleChange));      // handle height & base-color change
// props.forEach(input => input.addEventListener("change", handleChange));
props.forEach(input => input.addEventListener("mousemove", handleChange));  // handle range props
