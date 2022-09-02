import { FC } from "react"

const BuyATicket: FC = () => {
  return (
    <section className="buy-a-ticket" id="buy-a-ticket">
      <div className="left">
        <h2 className="section-title">Buy a ticket</h2>
        <h3 className="subtitle">WE PRESENT OUR FIRST COLLECTION OF 100 RARE NFT TICKETS</h3>
        <p className="desc1">
          Each ticket gives you a chance to win the main prize - 100 MATIC (~100$). And also allows you to participate
          in all future raffles. Simple, fair and most importantly entertaining! Every next round supply ×2
        </p>
        <p className="desc2">
          When all tickets are sold out, the winner is selected randomly. The winner’s ticket turns gold and 100 MATIC
          transfers to the winners’ wallet.
        </p>
      </div>
      <div className="right">
        <svg width="248" height="495" viewBox="0 0 248 495" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.131 0H235.562C237.807 8.02493 240.378 11.1251 247.897 13.5181V339.145C238.581 341.832 233.97 344.313 233.97 354.651C233.97 364.988 238.283 368.213 247.897 370.952V479.494C238.907 482.831 236.311 486.291 235.562 495H13.131C11.4574 485.816 8.65844 482.444 0.397909 479.494L0 368.169C10.8198 366.874 13.6328 363.716 13.5289 354.253C13.4947 344.687 9.79245 342.331 0 340.735V13.1205C7.94096 10.8076 10.6855 7.80377 13.131 0ZM20.6913 352.777H35.016V357.544H20.6913V352.777ZM38.1993 352.777H52.524V357.544H38.1993V352.777ZM70.032 352.777H55.7073V357.544H70.032V352.777ZM73.2152 352.777H87.54V357.544H73.2152V352.777ZM105.048 352.777H90.7232V357.544H105.048V352.777ZM108.231 352.777H122.556V357.544H108.231V352.777ZM140.064 352.777H125.739V357.544H140.064V352.777ZM143.247 352.777H157.572V357.544H143.247V352.777ZM175.08 352.777H160.755V357.544H175.08V352.777ZM178.263 352.777H192.588V357.544H178.263V352.777ZM210.096 352.777H195.771V357.544H210.096V352.777ZM213.279 352.777H227.604V357.544H213.279V352.777Z"
            fill="url(#paint0_linear_144_1614)"
          />
          <path
            d="M64.3723 454.2C63.5323 454.2 62.6923 453.96 61.8523 453.48C61.0123 452.96 60.5923 452.22 60.5923 451.26L62.0323 442.8H57.3523C56.6723 442.8 56.1323 442.54 55.7323 442.02C55.3323 441.5 55.1323 440.82 55.1323 439.98C55.1323 439.14 55.3323 438.44 55.7323 437.88C56.1723 437.28 56.7123 436.98 57.3523 436.98H63.1723L64.4923 429.6H59.8123C59.1323 429.6 58.5923 429.34 58.1923 428.82C57.7923 428.3 57.5923 427.62 57.5923 426.78C57.5923 425.94 57.7923 425.24 58.1923 424.68C58.5923 424.12 59.1123 423.84 59.7523 423.84H65.6323L67.2523 414.84C67.3323 414.32 67.6923 413.92 68.3323 413.64C69.0123 413.36 69.7123 413.22 70.4323 413.22C71.3523 413.22 72.1723 413.44 72.8923 413.88C73.6123 414.32 73.9723 415.08 73.9723 416.16L72.6523 423.84H79.2523L80.8123 414.84C80.9323 414.32 81.3123 413.92 81.9523 413.64C82.6323 413.36 83.3323 413.22 84.0523 413.22C84.9723 413.22 85.7923 413.44 86.5123 413.88C87.2323 414.32 87.6123 415.08 87.6523 416.16L86.2123 423.84H90.8923C91.4923 423.84 92.0123 424.12 92.4523 424.68C92.9323 425.2 93.1723 425.88 93.1723 426.72C93.1723 427.52 92.9323 428.2 92.4523 428.76C92.0123 429.32 91.5123 429.6 90.9523 429.6H85.1923L83.8123 436.98H88.4923C89.0523 436.98 89.5723 437.26 90.0523 437.82C90.5323 438.38 90.7723 439.06 90.7723 439.86C90.7723 440.74 90.5323 441.46 90.0523 442.02C89.6123 442.54 89.0923 442.8 88.4923 442.8H82.6723L80.9923 452.4C80.8723 452.92 80.4923 453.36 79.8523 453.72C79.2123 454.04 78.5723 454.2 77.9323 454.2C77.4123 454.2 76.8523 454.1 76.2523 453.9C75.6523 453.66 75.1323 453.34 74.6923 452.94C74.2923 452.5 74.0923 451.94 74.0923 451.26L75.5923 442.8H69.1123L67.3723 452.4C67.2923 452.92 66.9123 453.36 66.2323 453.72C65.5923 454.04 64.9723 454.2 64.3723 454.2ZM70.1923 436.98H76.7323L78.0523 429.6H71.5723L70.1923 436.98ZM111.874 456.36C109.234 456.36 106.854 455.92 104.734 455.04C102.614 454.12 100.934 452.66 99.6936 450.66C98.4536 448.62 97.8336 445.92 97.8336 442.56V425.94C97.8336 422.58 98.4536 419.9 99.6936 417.9C100.934 415.86 102.614 414.4 104.734 413.52C106.854 412.6 109.234 412.14 111.874 412.14C114.514 412.14 116.894 412.6 119.014 413.52C121.174 414.4 122.874 415.86 124.114 417.9C125.354 419.9 125.974 422.58 125.974 425.94V442.56C125.974 445.92 125.354 448.62 124.114 450.66C122.874 452.66 121.174 454.12 119.014 455.04C116.894 455.92 114.514 456.36 111.874 456.36ZM111.874 449.52C113.834 449.52 115.374 448.96 116.494 447.84C117.614 446.72 118.174 444.96 118.174 442.56V425.94C118.174 423.54 117.614 421.78 116.494 420.66C115.374 419.54 113.834 418.98 111.874 418.98C109.914 418.98 108.374 419.54 107.254 420.66C106.174 421.78 105.634 423.54 105.634 425.94V442.56C105.634 444.96 106.174 446.72 107.254 447.84C108.374 448.96 109.914 449.52 111.874 449.52ZM111.874 437.1C111.034 437.1 110.354 436.84 109.834 436.32C109.354 435.76 109.114 435.08 109.114 434.28C109.114 433.44 109.354 432.78 109.834 432.3C110.354 431.78 111.034 431.52 111.874 431.52C112.754 431.52 113.434 431.78 113.914 432.3C114.434 432.78 114.694 433.44 114.694 434.28C114.694 435.08 114.434 435.76 113.914 436.32C113.434 436.84 112.754 437.1 111.874 437.1ZM146.049 456.36C143.409 456.36 141.029 455.92 138.909 455.04C136.789 454.12 135.089 452.66 133.809 450.66C132.569 448.62 131.949 445.92 131.949 442.56V425.94C131.949 422.58 132.589 419.9 133.869 417.9C135.149 415.86 136.869 414.4 139.029 413.52C141.229 412.6 143.709 412.14 146.469 412.14C148.829 412.14 150.869 412.48 152.589 413.16C154.309 413.8 155.729 414.66 156.849 415.74C157.969 416.82 158.789 418.02 159.309 419.34C159.829 420.62 160.089 421.88 160.089 423.12C160.089 424.32 159.789 425.16 159.189 425.64C158.589 426.12 157.669 426.36 156.429 426.36C155.389 426.36 154.449 426.16 153.609 425.76C152.809 425.36 152.409 424.58 152.409 423.42C152.409 422.5 152.109 421.72 151.509 421.08C150.949 420.4 150.209 419.88 149.289 419.52C148.369 419.16 147.349 418.98 146.229 418.98C144.189 418.98 142.589 419.54 141.429 420.66C140.309 421.78 139.749 423.54 139.749 425.94V432.42C140.709 431.26 141.869 430.46 143.229 430.02C144.629 429.58 146.109 429.36 147.669 429.36C149.949 429.36 152.009 429.74 153.849 430.5C155.729 431.26 157.229 432.54 158.349 434.34C159.509 436.14 160.089 438.62 160.089 441.78V442.56C160.089 445.92 159.469 448.62 158.229 450.66C156.989 452.66 155.309 454.12 153.189 455.04C151.069 455.92 148.689 456.36 146.049 456.36ZM146.049 449.94C148.009 449.94 149.529 449.4 150.609 448.32C151.729 447.24 152.289 445.5 152.289 443.1V442.32C152.289 439.84 151.729 438.08 150.609 437.04C149.529 436 147.989 435.48 145.989 435.48C144.109 435.48 142.589 435.96 141.429 436.92C140.309 437.88 139.749 439.5 139.749 441.78V443.1C139.749 445.5 140.309 447.24 141.429 448.32C142.549 449.4 144.089 449.94 146.049 449.94ZM177.959 456.36C174.919 456.36 172.339 455.84 170.219 454.8C168.099 453.76 166.499 452.42 165.419 450.78C164.339 449.1 163.799 447.34 163.799 445.5C163.799 444.1 164.139 443.16 164.819 442.68C165.499 442.2 166.459 441.96 167.699 441.96C169.339 441.96 170.399 442.26 170.879 442.86C171.359 443.42 171.599 444.1 171.599 444.9C171.599 445.9 171.859 446.74 172.379 447.42C172.939 448.1 173.679 448.62 174.599 448.98C175.559 449.34 176.619 449.52 177.779 449.52C179.779 449.52 181.339 448.98 182.459 447.9C183.579 446.82 184.139 445.14 184.139 442.86V441.72C184.139 439.44 183.579 437.76 182.459 436.68C181.339 435.56 179.819 435 177.899 435H168.959C167.759 435 166.939 434.72 166.499 434.16C166.059 433.6 165.839 432.86 165.839 431.94C165.839 431.66 165.839 431.4 165.839 431.16C165.879 430.92 165.919 430.66 165.959 430.38L167.459 414.66C167.499 413.86 167.639 413.24 167.879 412.8C168.159 412.36 168.519 412.14 168.959 412.14H187.439C188.239 412.14 188.819 412.5 189.179 413.22C189.579 413.9 189.779 414.68 189.779 415.56C189.779 416.4 189.579 417.18 189.179 417.9C188.819 418.62 188.239 418.98 187.439 418.98H173.939L173.219 428.88H177.899C180.499 428.88 182.859 429.3 184.979 430.14C187.099 430.94 188.779 432.3 190.019 434.22C191.299 436.1 191.939 438.6 191.939 441.72V442.86C191.939 446.1 191.299 448.72 190.019 450.72C188.779 452.72 187.099 454.16 184.979 455.04C182.859 455.92 180.519 456.36 177.959 456.36Z"
            fill="white"
          />
          <path
            d="M49.1113 294.36C47.9913 294.36 46.9313 294.14 45.9313 293.7C44.9313 293.26 44.2913 292.6 44.0113 291.72L32.1313 253.98C32.0513 253.74 32.0113 253.5 32.0113 253.26C32.0113 252.66 32.2713 252.14 32.7913 251.7C33.3113 251.22 33.9513 250.84 34.7113 250.56C35.5113 250.28 36.2713 250.14 36.9913 250.14C37.5913 250.14 38.1313 250.26 38.6113 250.5C39.1313 250.74 39.4513 251.14 39.5713 251.7L49.0513 284.22L54.1513 263.34C54.3513 262.62 54.8113 262.08 55.5313 261.72C56.2913 261.36 57.1113 261.18 57.9913 261.18C58.8713 261.18 59.6713 261.36 60.3913 261.72C61.1513 262.08 61.6113 262.62 61.7713 263.34L66.8713 284.22L76.3513 251.7C76.5113 251.14 76.8313 250.74 77.3113 250.5C77.7913 250.26 78.3313 250.14 78.9313 250.14C79.6913 250.14 80.4513 250.28 81.2113 250.56C81.9713 250.84 82.6113 251.22 83.1313 251.7C83.6513 252.14 83.9113 252.66 83.9113 253.26C83.9113 253.5 83.8713 253.74 83.7913 253.98L71.9113 291.72C71.5913 292.6 70.9513 293.26 69.9913 293.7C69.0313 294.14 67.9713 294.36 66.8112 294.36C65.6913 294.36 64.6313 294.14 63.6313 293.7C62.6313 293.26 62.0313 292.6 61.8312 291.72L57.9913 275.52L54.0913 291.72C53.8913 292.6 53.2913 293.26 52.2913 293.7C51.2913 294.14 50.2313 294.36 49.1113 294.36ZM91.8228 259.14C90.6628 259.14 89.6628 258.76 88.8228 258C87.9828 257.2 87.5628 256.32 87.5628 255.36C87.5628 254.32 87.9828 253.44 88.8228 252.72C89.6628 251.96 90.6628 251.58 91.8228 251.58C93.0228 251.58 94.0228 251.96 94.8228 252.72C95.6228 253.44 96.0228 254.32 96.0228 255.36C96.0228 256.32 95.6228 257.2 94.8228 258C94.0228 258.76 93.0228 259.14 91.8228 259.14ZM91.8228 294C90.7028 294 89.7828 293.74 89.0628 293.22C88.3428 292.7 87.9828 292.12 87.9828 291.48V267.9C87.9828 267.18 88.3428 266.6 89.0628 266.16C89.7828 265.72 90.7028 265.5 91.8228 265.5C92.9028 265.5 93.8228 265.72 94.5828 266.16C95.3428 266.6 95.7228 267.18 95.7228 267.9V291.48C95.7228 292.12 95.3428 292.7 94.5828 293.22C93.8228 293.74 92.9028 294 91.8228 294ZM106.075 294C104.955 294 104.035 293.74 103.315 293.22C102.595 292.7 102.235 292.12 102.235 291.48V267.9C102.235 267.18 102.595 266.6 103.315 266.16C104.035 265.72 104.955 265.5 106.075 265.5C107.035 265.5 107.835 265.72 108.475 266.16C109.155 266.6 109.495 267.18 109.495 267.9V269.7C110.095 268.54 111.075 267.5 112.435 266.58C113.835 265.62 115.535 265.14 117.535 265.14C119.415 265.14 121.135 265.7 122.695 266.82C124.255 267.9 125.495 269.36 126.415 271.2C127.375 273.04 127.855 275.08 127.855 277.32V291.48C127.855 292.32 127.455 292.96 126.655 293.4C125.855 293.8 124.955 294 123.955 294C123.075 294 122.215 293.8 121.375 293.4C120.535 292.96 120.115 292.32 120.115 291.48V277.32C120.115 276.4 119.875 275.54 119.395 274.74C118.955 273.94 118.335 273.28 117.535 272.76C116.735 272.2 115.855 271.92 114.895 271.92C114.095 271.92 113.315 272.14 112.555 272.58C111.795 273.02 111.175 273.64 110.695 274.44C110.215 275.24 109.975 276.2 109.975 277.32V291.48C109.975 292.12 109.595 292.7 108.835 293.22C108.075 293.74 107.155 294 106.075 294ZM138.081 294C136.961 294 136.041 293.74 135.321 293.22C134.601 292.7 134.241 292.12 134.241 291.48V267.9C134.241 267.18 134.601 266.6 135.321 266.16C136.041 265.72 136.961 265.5 138.081 265.5C139.041 265.5 139.841 265.72 140.481 266.16C141.161 266.6 141.501 267.18 141.501 267.9V269.7C142.101 268.54 143.081 267.5 144.441 266.58C145.841 265.62 147.541 265.14 149.541 265.14C151.421 265.14 153.141 265.7 154.701 266.82C156.261 267.9 157.501 269.36 158.421 271.2C159.381 273.04 159.861 275.08 159.861 277.32V291.48C159.861 292.32 159.461 292.96 158.661 293.4C157.861 293.8 156.961 294 155.961 294C155.081 294 154.221 293.8 153.381 293.4C152.541 292.96 152.121 292.32 152.121 291.48V277.32C152.121 276.4 151.881 275.54 151.401 274.74C150.961 273.94 150.341 273.28 149.541 272.76C148.741 272.2 147.861 271.92 146.901 271.92C146.101 271.92 145.321 272.14 144.561 272.58C143.801 273.02 143.181 273.64 142.701 274.44C142.221 275.24 141.981 276.2 141.981 277.32V291.48C141.981 292.12 141.601 292.7 140.841 293.22C140.081 293.74 139.161 294 138.081 294ZM179.688 294.54C176.848 294.54 174.328 294.04 172.128 293.04C169.968 292 168.268 290.56 167.028 288.72C165.788 286.84 165.168 284.68 165.168 282.24V277.14C165.168 274.98 165.748 273 166.908 271.2C168.108 269.36 169.688 267.9 171.648 266.82C173.648 265.7 175.868 265.14 178.308 265.14C180.548 265.14 182.588 265.62 184.428 266.58C186.308 267.54 187.828 268.86 188.988 270.54C190.148 272.22 190.728 274.18 190.728 276.42C190.728 278.14 190.448 279.38 189.888 280.14C189.328 280.86 188.608 281.32 187.728 281.52C186.888 281.68 186.008 281.76 185.088 281.76H172.908V282.66C172.908 284.38 173.548 285.78 174.828 286.86C176.148 287.9 177.848 288.42 179.928 288.42C181.248 288.42 182.348 288.22 183.228 287.82C184.108 287.42 184.868 287.04 185.508 286.68C186.148 286.32 186.748 286.14 187.308 286.14C187.908 286.14 188.428 286.34 188.868 286.74C189.308 287.14 189.648 287.62 189.888 288.18C190.128 288.7 190.248 289.16 190.248 289.56C190.248 290.24 189.808 290.98 188.928 291.78C188.088 292.54 186.868 293.2 185.268 293.76C183.708 294.28 181.848 294.54 179.688 294.54ZM172.908 277.2H181.668C182.348 277.2 182.808 277.1 183.048 276.9C183.328 276.66 183.468 276.22 183.468 275.58C183.468 274.66 183.208 273.84 182.688 273.12C182.208 272.4 181.568 271.84 180.768 271.44C180.008 271.04 179.148 270.84 178.188 270.84C177.268 270.84 176.408 271.04 175.608 271.44C174.808 271.8 174.148 272.34 173.628 273.06C173.148 273.74 172.908 274.56 172.908 275.52V277.2ZM199.749 294C198.669 294 197.769 293.74 197.049 293.22C196.329 292.7 195.969 292.12 195.969 291.48V267.9C195.969 267.18 196.329 266.6 197.049 266.16C197.769 265.72 198.669 265.5 199.749 265.5C200.749 265.5 201.569 265.72 202.209 266.16C202.889 266.6 203.229 267.18 203.229 267.9V270.36C203.669 269.48 204.249 268.66 204.969 267.9C205.729 267.1 206.589 266.44 207.549 265.92C208.509 265.4 209.529 265.14 210.609 265.14H212.469C213.229 265.14 213.889 265.48 214.449 266.16C215.009 266.8 215.289 267.58 215.289 268.5C215.289 269.46 215.009 270.28 214.449 270.96C213.889 271.6 213.229 271.92 212.469 271.92H210.609C209.489 271.92 208.389 272.3 207.309 273.06C206.269 273.78 205.409 274.8 204.729 276.12C204.049 277.4 203.709 278.96 203.709 280.8V291.48C203.709 292.12 203.329 292.7 202.569 293.22C201.809 293.74 200.869 294 199.749 294Z"
            fill="white"
          />
          <path
            d="M186 81.4184L121.345 48.6571V81.3413L136.431 89.0149V139.791L160.856 152.225V102.172L186 114.939V81.4184Z"
            fill="#29D9D7"
            fillOpacity="0.73"
          />
          <path d="M64.3889 180.838H72.2353V178.774H66.9804V169.719L64.3889 168.273V180.838Z" fill="white" />
          <path
            d="M83.5207 181C86.7706 181 89.2604 178.791 89.2604 174.917C89.2604 171.043 86.7706 168.834 83.5207 168.834C80.2528 168.834 77.781 171.043 77.781 174.917C77.781 178.774 80.2528 181 83.5207 181ZM83.5207 171.049C85.4 171.049 86.6329 172.408 86.6329 174.917C86.6329 177.427 85.4 178.785 83.5207 178.785C81.6354 178.785 80.4085 177.427 80.4085 174.917C80.4085 172.408 81.6354 171.049 83.5207 171.049Z"
            fill="white"
          />
          <path
            d="M100.749 181C103.999 181 106.489 178.791 106.489 174.917C106.489 171.043 103.999 168.834 100.749 168.834C97.4814 168.834 95.0096 171.043 95.0096 174.917C95.0096 178.774 97.4814 181 100.749 181ZM100.749 171.049C102.629 171.049 103.861 172.408 103.861 174.917C103.861 177.427 102.629 178.785 100.749 178.785C98.8639 178.785 97.637 177.427 97.637 174.917C97.637 172.408 98.8639 171.049 100.749 171.049Z"
            fill="white"
          />
          <path
            d="M111.987 168.996V171.06H115.739V180.838H118.301V171.06H120.821L122.054 168.996H111.987Z"
            fill="white"
          />
          <path
            d="M127.29 168.996V171.06H131.042V180.838H133.604V171.06H136.124L137.356 168.996H127.29Z"
            fill="white"
          />
          <path
            d="M143.059 168.996V180.838H151.343V178.774H145.651V175.946H149.661L150.894 173.882H145.651V171.06H151.319V168.996H143.059Z"
            fill="white"
          />
          <path
            d="M160.015 180.838V176.64H161.907L164.229 180.838H167.09L164.486 176.235C165.881 175.657 166.653 174.483 166.653 172.864C166.653 170.511 165.043 168.996 162.26 168.996H157.424V180.838H160.015ZM161.763 171.043C163.259 171.043 163.984 171.685 163.984 172.864C163.984 174.038 163.259 174.628 161.775 174.628H160.015V171.043H161.763Z"
            fill="white"
          />
          <path
            d="M176.282 176.652V180.838H178.855V176.652L183.326 168.996H180.424L177.629 174.096H177.509L174.714 168.996H171.811L176.282 176.652Z"
            fill="white"
          />
          <path
            d="M112.724 155.54V65.3143L160.138 40.3286V65.3143L140.023 77.1131V86.3469L152.954 79.1952V95.1583L140.023 101.966V141.66L112.724 155.54Z"
            fill="#405FD6"
            fillOpacity="0.62"
          />
          <path
            d="M61 117.727V32L81.1149 42.076L101.23 96.2117V51.4333L121.345 60.7921V148.419L101.23 138.189L81.1149 90.6593V128.138L61 117.727Z"
            fill="#FFC2F9"
            fillOpacity="0.74"
          />
          <defs>
            <linearGradient
              id="paint0_linear_144_1614"
              x1="123.949"
              y1="0"
              x2="123.949"
              y2="495"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF9600" />
              <stop offset="0.854167" stopColor="#FFD700" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  )
}

export default BuyATicket
