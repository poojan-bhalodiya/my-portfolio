<template>
  <div class="flex items-center justify-center w-full py-8">
    <div class="container max-w-[990px] mx-6 md:mx-20">
      <!-- Heading -->
      <div class="flex items-center justify-center flex-col">
        <h1 class="text-center text-4xl font-bold">Resume</h1>
        <p class="text-center mt-6 max-w-3xl text-lg">
          As a backend developer, I'm Poojan Bhalodiya—turning creativity into
          functionality. With a keen eye for detail and a passion for
          innovation, I bring a distinct approach to backend solutions. Take a
          look at my resume, and let's team up for your ideas.
        </p>
      </div>

      <!-- Education -->
      <ResumeAccordion
        title="Education"
        icon="mdi:college-outline"
        :is-open="false"
      >
        <template #default>
          <div class="space-y-3">
            <div
              v-for="(item, i) in education"
              :key="i"
              class="flex gap-4 bg-secondary-900 rounded p-2"
            >
              <div>
                <Icon
                  :name="`ph:number-${item.key}-bold`"
                  class="h-10 w-10 border border-clay-400 rounded"
                />
              </div>
              <div>
                <p class="text-xl font-semibold">{{ item.title }}</p>
                <p
                  class="flex items-center justify-start gap-3 text-lg font-medium"
                >
                  <Icon
                    name="icon-park-twotone:degree-hat"
                    class="h-5 w-5 text-clay-300"
                  />{{ item.type }}
                </p>
                <p class="flex items-center justify-start gap-3">
                  <Icon name="bx:calendar" class="h-5 w-5 text-clay-300" />{{
                    item.duration
                  }}
                </p>
              </div>
            </div>
          </div>
        </template>
      </ResumeAccordion>

      <!-- Primary Skills -->
      <ResumeAccordion
        title="Primary Skills"
        icon="grommet-icons:technology"
        :is-open="false"
      >
        <template #default>
          <ResumeTechnologies
            color-from="from-yellow-300"
            color-to="to-yellow-500"
            :persentage="80"
            bg-color="bg-secondary-800"
            label="JavaScript"
            icon="vscode-icons:file-type-js-official"
          />
          <ResumeTechnologies
            color-from="from-lime-500"
            color-to="to-green-700"
            :persentage="35"
            bg-color="bg-secondary-800"
            label="Node"
            icon="logos:nodejs-icon"
          />
          <ResumeTechnologies
            color-from="from-neutral-300"
            color-to="to-neutral-500"
            :persentage="60"
            bg-color="bg-secondary-800"
            label="Express"
            icon="skill-icons:expressjs-dark"
          />
          <ResumeTechnologies
            color-from="from-green-400"
            color-to="to-green-800"
            :persentage="55"
            bg-color="bg-secondary-800"
            label="MongoDB"
            icon="devicon:mongodb"
          />
          <ResumeTechnologies
            color-from="from-red-400"
            color-to="to-red-800"
            :persentage="80"
            bg-color="bg-secondary-800"
            label="SQL"
            icon="devicon:sqldeveloper"
          />
          <ResumeTechnologies
            color-from="from-pink-400"
            color-to="to-pink-600"
            :persentage="45"
            bg-color="bg-secondary-800"
            label="REST / GraphQL"
            icon="mdi:api"
          />
        </template>
      </ResumeAccordion>

      <!-- Secondary Skills -->
      <ResumeAccordion
        title="Secondary Skills"
        icon="simple-icons:hyperskill"
        :is-open="false"
      >
        <template #default>
          <ResumeTechnologies
            color-from="from-orange-500"
            color-to="to-orange-600"
            :persentage="75"
            bg-color="bg-secondary-800"
            label="HTML"
            icon="vscode-icons:file-type-html"
          />
          <ResumeTechnologies
            color-from="from-blue-300"
            color-to="to-blue-600"
            :persentage="50"
            bg-color="bg-secondary-800"
            label="CSS"
            icon="vscode-icons:file-type-css"
          />
          <ResumeTechnologies
            color-from="from-sky-400"
            color-to="to-sky-400"
            :persentage="50"
            bg-color="bg-secondary-800"
            label="Tailwind css"
            icon="logos:tailwindcss-icon"
          />
          <ResumeTechnologies
            color-from="from-purple-600"
            color-to="to-violet-700"
            :persentage="45"
            bg-color="bg-secondary-800"
            label="Bootstrap"
            icon="devicon:bootstrap"
          />
        </template>
      </ResumeAccordion>

      <!-- Additional Skills -->
      <ResumeAccordion
        title="Additional Skills"
        icon="mdi:cookie-plus-outline"
        :is-open="false"
      >
        <template #default>
          <ResumeTechnologies
            color-from="from-orange-400"
            color-to="to-orange-700"
            :persentage="70"
            bg-color="bg-secondary-800"
            label="GitHub / GitLab"
            icon="devicon:git"
          />
          <ResumeTechnologies
            color-from="from-purple-500"
            color-to="to-violet-600"
            :persentage="45"
            bg-color="bg-secondary-800"
            label="Directus"
            icon="simple-icons:directus"
          />
          <ResumeTechnologies
            color-from="from-amber-400"
            color-to="to-orange-500"
            :persentage="50"
            bg-color="bg-secondary-800"
            label="firebase"
            icon="devicon:firebase"
          />
          <ResumeTechnologies
            color-from="from-indigo-300"
            color-to="to-green-900"
            :persentage="85"
            bg-color="bg-secondary-800"
            label="SAP HANA / Business One / Crystal Reports "
            icon="logos:sap"
          />
        </template>
      </ResumeAccordion>

      <!-- Experties in Tools -->
      <ResumeAccordion
        title="Experties"
        icon="solar:star-circle-broken"
        :is-open="false"
      >
        <template #default>
          <ul class="list-disc space-y-1">
            <li>
              Embarking on a journey to expertise in databases, unlocking the
              power of structured information for efficient storage, retrieval,
              and management of data
            </li>
            <li>
              Mastering the art of completing tasks under tight deadlines, I excel in swiftly navigating through challenges to deliver exceptional results. My expertise extends to databases, where I harness the potential of structured information for seamless storage, retrieval, and efficient data management.
            </li>
          </ul>
        </template>
      </ResumeAccordion>

      <!-- Experience -->
      <ResumeAccordion title="Experience" icon="ph:bag" :is-open="false">
        <template #default>
          <div class="m-4 bg-secondary-900 rounded-md p-4">
            <div class="gap-5 flex">
              <div>
                <Icon
                  name="ph:number-one-bold"
                  class="h-10 w-10 border border-clay-400 rounded"
                />
              </div>
              <div
                class="flex items-center justify-between w-full flex-col md:flex-row"
              >
                <a href="https://www.uneecops.com/" target="_blank">
                  <div class="bg-white rounded p-2">
                    <img
                      src="https://res.cloudinary.com/dhntmsget/image/upload/v1707001413/exprience/Uneecops.png"
                      class="max-h-12"
                    />
                  </div>
                </a>
                <div
                  class="flex flex-col items-center justify-center mt-3 md:mt-0 -ml-16"
                >
                  <p
                    class="text-sm md:text-2xl font-semibold flex items-center justify-start gap-3"
                  >
                    <Icon
                      name="clarity:employee-line"
                      class="h-4 w-4 md:h-7 md:w-7 text-clay-300"
                    />
                    Jr. Software Engineer
                  </p>
                  <p class="font-semibold text-sm md:text-md">
                    <Icon
                      name="mdi:calendar-outline"
                      class="h-4 w-4 md:h-7 md:w-7 text-clay-300"
                    />
                    20 Months Of Experience
                  </p>
                </div>
              </div>
            </div>
            <div class="ml-5 md:ml-16 pt-4">
              <ul class="list-disc space-y-1">
                <li>
                  Served as a Jr. Software Engineer specializing in SAP HANA,
                  SAP Business One, and Crystal Reports.
                </li>
                <li>
                  Developed and maintained efficient data models in SAP HANA for
                  various business needs.
                </li>
                <li>
                  Designed, developed, and maintained Crystal Reports for
                  generating dynamic and interactive reports.
                </li>
                <li>
                  Provided technical support and assistance to clients for
                  software customization and troubleshooting.
                </li>
              </ul>
            </div>
          </div>
        </template>
      </ResumeAccordion>

      <div class="mt-16">
        <div class="flex items-center justify-center gap-3">
          <Icon
            name="mdi:arrow-down-bold-box-outline"
            class="h-10 w-10 text-clay-400"
          />
          <h2 class="text-2xl font-bold">Download Resume</h2>
        </div>
        <div class="flex items-center justify-center gap-10 mt-5">
          <div class="border rounded-md hover:cursor-not-allowed">
            <img
              src="https://res.cloudinary.com/dhntmsget/image/upload/v1706997986/Resume/resume.jpg"
              class="h-[250px] w-[200px]"
            />
          </div>
          <div>
            <p class="text-xl font-semibold text-center">
              Save Resume <br />As PDF
            </p>
            <a
              href="/poojan_bhalodiya_resume.pdf"
              download
              class="p-2 border border-clay-400 mt-5 w-auto items-center flex justify-center rounded-md hover:ring hover:ring-clay-400"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const education = [
  {
    title: "Bachelor of Vocation",
    type: "Information Technology",
    duration: "2021 - Present",
    key: "one",
  },
  {
    title: "Higher Secondary Certificate Examination - GSHSEB",
    type: "Commerce",
    duration: "May - 2021",
    key: "two",
  },
  {
    title: "Secondary Certificate Examination - GSHSEB",
    type: "GSHSEB",
    duration: "March - 2019",
    key: "three",
  },
];
</script>
